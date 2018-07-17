export const getAmiras = () => {
    /* fetch('http://192.168.174.128:3005/get/available/amiras')
    .then((resp) => resp.json())
    .then(function(data) {
        return 'data';
    })
    .catch(error => {
        return 'Faild';
    }) */

    return fakeAmiras;
}

export const selectAmira = (amira) => {
    console.log ('Amira: ' + amira.name + ' has been selected successfully.');
    fetch('http://192.168.174.128:3005/select/amira', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( amira )
      })
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson === true) {
            return true;
          } else {
            alert (responseJson.message);
          }
        })
        .catch(err => {
          throw err;
        });
}

// Fake data
var fakeAmiras = [
  {
    name: 'Shahd',
    phone: '01010101'
  },
  {
    name: 'Shahd',
    phone: '01010101'
  },
  {
    name: 'Shahd',
    phone: '01010101'
  },
  {
    name: 'Shahd',
    phone: '01010101'
  }
]
