class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (baseUrl) {
    $.ajax({
      method: 'GET',
      url: baseUrl,
      success: function(response) {
        console.log(response)
        response.forEach((character) => {
          $('.characters-container').append(`<div class="character-info">
            <div class="name">Character Name: <b id="fetched-character-name">${character.name}</b></div>
            <div class="occupation">Character Occupation: <b id="fetched-character-occupation">${character.occupation}</b></div>
            <div class="debt">Character Debt: <b id="fetched-character-debt">${character.debt}</b></div>
            <div class="weapon">Character Weapon: <b id="fetched-character-weapon">${character.weapon}</b></div>
          </div>`)
        })
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  getOneRegister (baseUrl, id) {
    $.ajax({
      method: 'GET',
      url: baseUrl + id,
      success: function(response) {
        console.log(response)
        $('#fetched-character-name').text(response.name)
        $('#fetched-character-occupation').text(response.occupation)
        $('#fetched-character-debt').text(response.debt)
        $('#fetched-character-weapon').text(response.weapon)
      },
      error: function(err) {
        console.log(err)
      }
    })

  }

  createOneRegister (baseUrl, newCharacter) {
    $.ajax({
      method: 'POST',
      url: baseUrl,
      data: newCharacter,
      success: function(response) {
        console.log(response)
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  updateOneRegister (baseUrl, updatedCharacter, id) {
    $.ajax({
      method: 'PATCH',
      url: baseUrl + id,
      data: updatedCharacter,
      success: function(response) {
        console.log(updatedCharacter)
      },
      error: function(err) {
        console.log('Character not found')
      }
    })
  }

  deleteOneRegister (baseUrl, id) {
    $.ajax({
      method: 'DELETE',
      url: baseUrl + id,
      success: function(response) {
        console.log('Character has been successfully deleted')
      },
      error: function(err) {
        console.log('Character not found')
      }
    })
  }
}
