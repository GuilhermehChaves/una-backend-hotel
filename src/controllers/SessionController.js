import User from '../models/User';

class SessionController {
  async store(request, response){
    const { email } = request.body;

    let user = await User.findOne({ email });

    if(!user){
      user = await User.create({ email });
      return response.json(user);
    }

    return response.status(400).json({ message: 'User already exists' })
  }
}

export default new SessionController;