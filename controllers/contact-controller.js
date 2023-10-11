

import ctrlWrapper from '../decorators/index.js'

const getAll = () => {

}
const getById = () => {

}
const addNew = () => {

}
const updateById = () => {

}

const deleteById = () => {

}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    addNew: ctrlWrapper(addNew),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}
