const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com/characters")
var URL = 'http://ih-crud-api.herokuapp.com/characters/'

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList(URL)
  })

  $('#fetch-one').on('click', (e) => {
    var charId = $('#single-character-id').val()
    charactersAPI.getOneRegister(URL, charId)
  })

  $('#delete-one').on('click', (e) => {
    var charId = $('#delete-character-id').val()
    charactersAPI.deleteOneRegister(URL, charId)
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    var charId = $('#edit-character-id').val()
    var updatedCharacter = {
      name: $('#edit-character-name').val(),
      occupation: $('#edit-character-occupation').val(),
      debt: $('#edit-character-debt').val(),
      weapon: $('#edit-character-weapon').val()
    }

    charactersAPI.updateOneRegister(URL, updatedCharacter, charId)
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    var newCharacter = {
      name: $("#new-character-name").val(),
      occupation: $("#new-character-occupation").val(),
      debt: $("#new-character-debt").val(),
      weapon: $("#new-character-weapon").val()
    }

    charactersAPI.createOneRegister(URL, newCharacter)

  })
})
