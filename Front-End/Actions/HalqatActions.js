import call from 'react-native-phone-call'


export const getMyList = () => {
    /* fetch('http://192.168.174.128:3005/get/halqat/list')
    .then((resp) => resp.json())
    .then(function(data) {
        return 'data';
    })
    .catch(error => {
        return 'Faild';
    }) */

    return fakeHalqat;
}

export const callUser = (user) => {
    const args = {
        number: user.phone, // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
       
      call(args).catch(console.error)
}




// Fake data
var fakeHalqat = [
    {
        name: 'تجويد',
        image: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
    },
    {
        name: 'تجويد',
        image: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
    },
    {
        name: 'تجويد',
        image: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
    },
    {
        name: 'تجويد',
        image: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
    },
  ]