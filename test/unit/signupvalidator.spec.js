const { test } = use('Test/Suite')('SignupUserValidator')
const { validate } = use('Validator')
const SignupValidator =  use('App/Validators/CreateUser')
signupValidator = new SignupValidator()



test('validate for valid information ', async ({ assert }) => {
    const validation = await validate({
      'name': 'ali',
        'email': 'A@AAAA.com',
        'password': 'aaaa',
        'Address' : 'kashan',
        'phone' : '09121201122'
    },signupValidator.rules)
    console.log("message "+validation.messages())
    assert.isFalse(validation.fails())
    
  })

test('validate for  empty fields  ', async ({ assert }) => {
    const validation = await validate({
      'name': '',
        'email': '',
        'password': '',
        'Address' : '',
        'phone' : ''
    },signupValidator.rules)
    assert.isTrue(validation.fails())
    
  })

test('validate for  exsiting email ', async ({ assert }) => {
    const validation = await validate({
      'name': 'ali',
        'email': 'A@A.com',
        'password': 'aaaa',
        'Address' : 'kashan',
        'phone' : '09121201212'
    },signupValidator.rules)
    assert.isTrue(validation.fails())
    
})

test('validate for  not valid email ', async ({ assert }) => {
    const validation = await validate({
      'name': 'ali',
        'email': 'wrrng ',
        'password': 'aaaa',
        'Address' : 'kashan',
        'phone' : '09101201212'
    },signupValidator.rules)
    assert.isTrue(validation.fails())
    
})
test('validate for  exsiting phone ', async ({ assert }) => {
    const validation = await validate({
      'name': 'ali',
        'email': 'A@A.com',
        'password': 'aaaa',
        'Address' : 'kashan',
        'phone' : '0901111111'
    },signupValidator.rules)
    assert.isTrue(validation.fails())
    
})