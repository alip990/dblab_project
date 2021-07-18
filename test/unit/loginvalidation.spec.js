const { test } = use('Test/Suite')('LoginUserValidator')
const { validate } = use('Validator')
const LoginValidator =  use('App/Validators/LoginUser')
loginValidator = new LoginValidator()



test('validate login email  for  valid email and valid password ', async ({ assert }) => {
  const validation = await validate({
    'email': 'A@A.com' , 
    'password' : 'aaaaa'
  },loginValidator.rules)
  assert.isFalse(validation.fails())
  
})

test('validate login email  for not valid email and valid password ', async ({ assert }) => {
  const validation = await validate({
    'email': 'wrong mail' , 
    'password' : 'aaaaa'
  },loginValidator.rules)
  assert.isTrue(validation.fails())
  assert.deepEqual(validation.messages(), [
    { field:"email",
      validation: 'email',
      message: 'email validation failed on email'
    }
  ])
})


test('validate login email  for  empty email and valid password', async ({ assert }) => {
  const validation = await validate({
    'email': '' , 
    'password' : 'aaaaa'
  },loginValidator.rules)
  assert.isTrue(validation.fails())
  
})

test('validate login email  for  valid email and empty password', async ({ assert }) => {
  const validation = await validate({
    'email': 'A@A.com' , 
    'password' : ''
  },loginValidator.rules)
  assert.isTrue(validation.fails())
  
})

test('validate login email  for  not valid email and empty password', async ({ assert }) => {
  const validation = await validate({
    'email': 'wroin email' , 
    'password' : ''
  },loginValidator.rules)
  assert.isTrue(validation.fails())
  
})


test('validate login email  for  empty email and empty password', async ({ assert }) => {
  const validation = await validate({
    'email': '' , 
    'password' : ''
  },loginValidator.rules)
  assert.isTrue(validation.fails())
  
})