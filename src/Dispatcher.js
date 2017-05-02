class Dispatcher {

    constructor () {
        this.isDispatching = false;
    }

    dispatch(action) {
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
    }

    dispatch(action) {
        //TODO: Pass to Stores
        this.isDispatching = false;
    }
}

export default new Dispatcher();