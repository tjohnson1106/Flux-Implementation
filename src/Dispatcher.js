class Dispatcher {

    constructor () {
        this.isDispatching = false;
        this.actionHandlers = [];
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

register(actionHandler) {
this.actionHandlers.push(actionHandler);
}

export default new Dispatcher();