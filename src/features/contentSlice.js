import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const getCategorizedData = (category, data) => {
    return data.filter(item => item.category.toString().toLowerCase() === category.toString().toLowerCase())
}


const initialState = {
    data: [],
    userInfo: [],
    myCard: JSON.parse(localStorage.getItem("myCard")) || [],
    categories: ["All", "Men's clothing", "Jewelery", "Electronics", "Women's clothing"],
    categorizedData: [],
    isLoading: true
}

export const fetchContent = createAsyncThunk('fetchContent', async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();

    return data
})

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.myCard.map(item => {
                if (item.title === action.payload.title) {
                    item.count += 1
                }
                return item
            })
            localStorage.setItem("myCard", JSON.stringify(state.myCard))
        },
        setCategorizedData: (state, action) => {
            switch (action.payload) {
                case state.categories[0]:
                    state.categorizedData = state.data
                    break;

                case state.categories[1]:
                    state.categorizedData = getCategorizedData(action.payload, state.data)
                    break;

                case state.categories[2]:
                    state.categorizedData = getCategorizedData(action.payload, state.data)
                    break;

                case state.categories[3]:
                    state.categorizedData = getCategorizedData(action.payload, state.data)
                    break;

                case state.categories[4]:
                    state.categorizedData = getCategorizedData(action.payload, state.data)
                    break;

                default:
                    state.categorizedData = state.data
                    break;
            }
        },
    },
    extraReducers: {
        [fetchContent.pending]: (state) => {
            state.isLoading = true
        },
        [fetchContent.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false
            state.myCard = JSON.parse(localStorage.getItem("myCard")) || action.payload.map(item => {
                return {
                    ...item,
                    count: 0
                }
            })
        }
    }
});

export const {
    addToCard, setCategorizedData, setPath
} = contentSlice.actions
export const selectedData = state => state.content.data
export const selectedCard = state => state.content.myCard
export const selectedCategorizedData = state => state.content.categorizedData
export const selectedCategories = state => state.content.categories
export const selectedLoading = state => state.content.isLoading
export default contentSlice.reducer 