const userModel = require('../model/userSchema');

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

if(!name,!email,!password,!confirmPassword)
{
  return res.status(400).json({
    success:false,
    message:'every field is required'
  })
}
  try {
    const userInfo = new userModel(req.body);
    const result = await userInfo.save();

    
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'An account already exists with the provided email id'
      });
    }
    return res.status(400).json({
      success: false,
      message: e.message
    });
  }
};

module.exports = { signup };
