exports.EMAIL_EXISTING = 'EMAIL_EXISTING'
exports.USER_NO_EXIST = 'USER_NO_EXIST'
exports.PASSWORD_ERROR = 'PASSWORD_ERROR'
exports.SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
exports.ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'
exports.ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'

exports.SUCCESS_MESSAGE = JSON.stringify({
  status: 200,
  message: 'Operation is successful',
})

exports.EAMIL_FAILED_MESSAGE = JSON.stringify({
  status: 400,
  message: 'Mailbox already exists',
})

exports.SIGNIN_SUCCESS_MESSAGE = JSON.stringify({
  status: 200,
  message: 'Account login successful',
})

exports.USER_NO_EXIST_MESSAGE = JSON.stringify({
  status: 400,
  type: 'USER_NO_EXIST',
  origin: ' ',
  message: 'The account does not exist',
})

exports.PASSWORD_ERROR_MESSAGE = JSON.stringify({
  status: 400,
  message: 'Password mistake',
})

exports.ADD_FRIEND_SUCCESS_MESSAGE = JSON.stringify({
  status: 200,
  type: 'ADD_FRIEND_SUCCESS',
  origin: ' ',
  message: 'Friend added successfully',
})

exports.ADD_FRIEND_FAILED_MESSAGE = JSON.stringify({
  status: 400,
  type: 'ADD_FRIEND_FAILED',
  origin: ' ',
  message: 'Server error, adding friend failed',
})

exports.ADD_FRIEND_BE_REJECTET = JSON.stringify({
  status: 400,
  type: 'ADD_FRIEND_FAILED',
  origin: ' ',
  message: 'Your friend request was rejected',
})
