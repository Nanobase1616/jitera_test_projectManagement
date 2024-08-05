import { useMutation } from 'react-query';
import { deleteQuoteEstimate } from './requests';

/**
 * Custom hook to delete a quote/estimate
 * @returns {object} - The mutation object from react-query
 */
export const useDeleteQuoteEstimate = () => {
  return useMutation(async (quoteId: number) => {
    if (!Number.isInteger(quoteId)) {
      throw new Error('Quote ID must be a valid integer.');
    }
    return await deleteQuoteEstimate(quoteId);
  });
};

export { getQuotesEstimates } from './requests';
