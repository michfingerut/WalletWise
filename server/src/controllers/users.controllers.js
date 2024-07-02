import logger from '../logger.js';

const getUserById = async (req, res) => {
  try {
    logger.info('getUserById');
    res.status(200).json('yay');
  } catch (err) {
    //err handling
  }
};

const postUser = async (req, res) => {
  try {
    logger.info('postUser');
    res.status(201).json('yay');
  } catch (err) {
    //err handling
  }
};

const patchUser = async (req, res) => {
  try {
    logger.info('patchUser');
    res.status(200).json('yay');
  } catch (err) {
    //err handling
  }
};

const deleteUser = async (req, res) => {
  try {
    logger.info('deleteUser');
    res.status(200).json('yay');
  } catch (err) {
    //err handling
  }
};

export default { getUserById, postUser, patchUser, deleteUser };
