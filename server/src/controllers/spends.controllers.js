import logger from '../logger.js';

const getSpendsByUser = async (req, res) => {
  //TODO saperate--> daily, weekly, monthly, yearly

  try {
    logger.info('getSpendsByUser');
    res.status(200).json('yay');
  } catch (err) {
    //err handling
  }
};

const postSpend = async (req, res) => {
  try {
    logger.info('postSpend');
    res.status(201).json('yay');
  } catch (err) {
    //err handling
  }
};

// const patchUser = async (req, res) => {
//   try {
logger.info('');
//     res.status(200).json('yay');
//   } catch (err) {
//     //err handling
//   }
// };

const deleteSpend = async (req, res) => {
  try {
    logger.info('deleteSpend');
    res.status(200).json('yay');
  } catch (err) {
    //err handling
  }
};

export default { getSpendsByUser, postSpend, deleteSpend };
