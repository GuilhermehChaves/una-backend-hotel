import Hotel from '../models/Hotel';

class HotelController {
  async store(request, response) {
    let hotel = await Hotel.findOne(request.body);

    return !hotel ?
      response.status(200).json(await Hotel.create(request.body)) :
      response.status(400).json({ message: 'Hotel already exists' });
  }

  async index(_, response) {
    return response.status(200).json(await Hotel.find());
  }

  async show(request, response) {
    let hotel = await Hotel.findById(request.params.id);

    return !hotel ?
      response.status(404).json({ message: 'Hotel not found' }) :
      response.status(200).json(hotel);
  }

  async update(request, response) {
    let hotel = await Hotel.findById(request.params.id);

    if (hotel) {
      let update = await Hotel.updateOne({ _id: request.params.id }, request.body);

      return update.n > 0 ?
        response.status(200).json(await Hotel.findById(request.params.id)) :
        response.json(null)
    }

    return response.status(404).json({ message: 'Hotel not found' });
  }

  async destroy(request, response) {
    let hotel = await Hotel.findById(request.params.id);

    if (hotel) {
      await Hotel.deleteOne(hotel);
      return response.status(200).json({ message: 'Deleted successfully' });
    }

    return response.status(404).json({ message: 'Hotel not found' })
  }
}

export default new HotelController;