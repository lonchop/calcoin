import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Dollar {
  exchangeRate: string
  value: string
}

interface AttributeState {
  // * State
  dollar: Dollar

  // * Actions
  setDollar: (exchangeRate: string, value: string) => void
  // setDolarBCV: (value: boolean) => void
  // setExchangeRate: (value: string) => void
  // createAttribute: (data: { name: string; values: string[] }) => Promise<void>
  // addValue: (data: { id: number; values: string[] }) => Promise<void>
}

const storeApi: StateCreator<AttributeState> = (set) => ({
  dollar: {
    exchangeRate: 'BCV',
    value: '40,00',
  },

  // * Actions
  setDollar: (exchangeRate, value) => {
    set((state) => ({
      dollar: {
        ...state.dollar,
        exchangeRate,
        value,
      },
    }))
  },

  // setDolarBCV: (value) => {
  //   console.log('value:', value)

  //   set({ dolarBCV: value })
  // },

  // setExchangeRate: (value) => {
  //   console.log('value:', value)

  //   set({ exchangeRate: value })
  // }

  // createAttribute: async (data) => {
  //   set({ isLoading: true })

  //   try {
  //     const resCreate = await createAttribute({ data })

  //     const response = await getAllAttributes({ offset: 0, limit: 20 })

  //     set({ attributes: response.data })

  //     return resCreate
  //   } catch (error) {
  //     throw error
  //   } finally {
  //     set({ isLoading: false })
  //   }
  // },

  // addValue: async (data) => {
  //   set({ isLoading: true })

  //   try {
  //     const resCreateValue = await addValue({ data })

  //     const response = await getAllAttributes({ offset: 0, limit: 20 })

  //     set({ attributes: response.data })

  //     return resCreateValue
  //   } catch (error) {
  //     throw error
  //   } finally {
  //     set({ isLoading: false })
  //   }
  // },
})

export const useDolarStore = create<AttributeState>()(
  devtools(persist(storeApi, { name: 'attribute-storage' })),
)
