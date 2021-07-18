'use strict'

class NewFood {
  get rules () {
    return {
      'name': 'required' , 
      'categoryName': 'required' ,
      'description': 'required',
      'price' : 'required|number|min:0|max:6',
      'food_img': 'required|file|file_ext:png,jpg,jpeg,svg'

    }
  }

  get messages() {
    return {
      'required': 'Woah now, {{ field }} is required.',
      'number': 'you should enter english number',
      'file_ext' : 'you should enter valid image ',
      'file' : 'you should enter valid image ',
      'max' : 'max price is 500000',

    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();
    
    return this.ctx.response.redirect('back');
  }
}

module.exports = NewFood