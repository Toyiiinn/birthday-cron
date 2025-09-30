
const cron = require('node-cron');
const UserModel = require('./model/users');
const { sendBirthdayEmail } = require('./emailservice');

async function checkBirthdays() {
  try {
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    
    const usersWithBirthdayToday = await User.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$birthday" }, todayMonth] },
          { $eq: [{ $dayOfMonth: "$birthday" }, todayDate] }
        ]
      }
    });
    
    for (const user of usersWithBirthdayToday) {
      await sendBirthdayEmail(user.email, user.username);
    }
    
    console.log(`Birthday emails sent to ${usersWithBirthdayToday.length} users`);
  } catch (error) {
    console.error('Birthday check failed:', error);
  }
}

cron.schedule('0 0 19 * * *', checkBirthdays, {
  timezone: "Africa/Lagos"
});

module.exports = { checkBirthdays };