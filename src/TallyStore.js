let tally = 0;

vart tally = {
    count: 0
};

const increment = () => {
    tally.count += 1;
};

const decrement = () => {
    tally.count -= 1;
};

const zero = () => {
    tally.count = 0;
};

class TallyStore {
    getTally() {
        return Object.assign({}, tally);
    }
}

const handleAction = (action) => {
    switch (action.type) {
        case 'INCREMENT':
            increment();
            break;
        case 'DECREMENT':
            decrement();
            break;
        case 'ZERO':
            zero();
            break;
        default:
        // do nothing
    }
};



const instance = new TallyStore();
export default instance;