import { useState } from 'react'

import { useTranslation } from '@i18n/index'
import { useDeleteQuoteEstimate } from '@services/quotesEstimates'
import { Button } from '@components/atoms/Button'
import { Toast } from '@components/atoms/Toast'
import { useQueryExamples } from '@services/example'
import { useExampleAuthenticationMutation, useLogoutMutation } from '@services/authentication'

import styles from './Example.module.scss'

function ExamplePage(): JSX.Element {
  const { t } = useTranslation()
  const { data, isLoading } = useQueryExamples()
  const exampleAuthenticationMutation = useExampleAuthenticationMutation()
  const logoutMutation = useLogoutMutation()
  const [quoteIdToDelete, setQuoteIdToDelete] = useState<number | null>(null)
  const deleteQuoteEstimateMutation = useDeleteQuoteEstimate()

  const handleNext = () =>
    setParams((old) => ({ ...(old || {}), page: (old?.page || 1) + 1 }))

  const handleAuthentication = () => {
    if (authenticationData) {
      logoutMutation.mutate()
    } else {
      exampleAuthenticationMutation.mutate()
    }
  }

  const handleDeleteQuote = async () => {
    if (quoteIdToDelete !== null) {
      try {
        await deleteQuoteEstimateMutation.mutateAsync(quoteIdToDelete)
        Toast.success(t('Quote/Estimate deleted successfully'))
        setQuoteIdToDelete(null)
      } catch (error: any) {
        Toast.error(error.message || t('An error occurred while deleting the quote/estimate.'))
      }
    } else {
      Toast.error(t('Please provide a valid Quote ID to delete.'))
    }
  }

  const handleQuoteIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuoteIdToDelete(Number(e.target.value))

  return (
    <div className={styles.page_container}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Button
            disabled={
              isLoading ||
              exampleAuthenticationMutation.isLoading ||
              logoutMutation.isLoading
            }
            title={
              (authenticationData
                ? t('example.logout')
                : t('example.login')) ||
              ''
            }
            onClick={handleAuthentication}
          />
          {authenticationData ? (
            <>
              <pre>
                {!isLoading
                  ? JSON.stringify(data || {}, null, 2)
                  : t('common.loading')}
              </pre>
              <Button
                disabled={
                  isLoading ||
                  exampleAuthenticationMutation.isLoading ||
                  logoutMutation.isLoading
                }
                title={t('example.next') || ''}
                onClick={handleNext}
              />
              <div>
                <input
                  type="number"
                  placeholder={t('Enter Quote ID to delete')}
                  onChange={handleQuoteIdChange}
                />
                <Button
                  title={t('Delete Quote/Estimate') || ''}
                  onClick={handleDeleteQuote}
                  disabled={deleteQuoteEstimateMutation.isLoading}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ExamplePage