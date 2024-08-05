import axios from 'axios';
import { getAuthToken } from '../auth';

/**
 * Delete a quote/estimate by ID
 * @param {number} quoteId - The ID of the quote/estimate to delete
 * @returns {Promise<object>} - The response from the API
 */
export const deleteQuoteEstimate = async (quoteId: number): Promise<object> => {
  try {
    const token = getAuthToken();
    const response = await axios.delete(`/api/quotes-estimates/${quoteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred while deleting the quote/estimate.');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error in setting up the request.');
    }
  }
};

export const getQuotesEstimates = async (): Promise<object> => {
  const token = getAuthToken();
  const response = await axios.get('/api/quotes-estimates', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};