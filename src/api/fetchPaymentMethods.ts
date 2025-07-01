const fetchPaymentMethods = async () => {
  const response = await fetch(
    'https://config.alegra.com/api/v1/payment-methods?application_version=colombia',
    {},
  )
  const data = await response.json()
  return data
}

export default fetchPaymentMethods
