const expect = require('chai').expect
const Node = require('../src/node')
const LinkedList = require('../src/linkedlist')


    describe('LinkedList', () => {
        describe('#constructor', () => {
            const list = new LinkedList()

            it('assign 0 to this.length', () => {
                expect(list.length).to.equal(0)
            })
        });
    })

    describe('add', () => {
        it('should assign any nodes to this._head and this._tail if list is empty', () => {
            const data = 101;

            const list = new LinkedList();

            list.add(data);

            expect(list.tail).to.be.an.instanceof(Node)
            expect(list.head).to.be.an.instanceof(Node)
        });

        it('should add new data to the end of list', () => {
            const list = new LinkedList();

            list.add(666);
            list.add(420);

            expect(list.length).to.equal(2);
            expect(list.indexOf(666)).to.equal(0);
            expect(list.indexOf(420)).to.equal(1);
        });

    })

    describe('indexOf', () => {
        it('should return Node.data by index', () => {
            const list = new LinkedList()

            list.add(123)
            list.add(456)
            list.add(789)

            expect(list.indexOf(123)).to.equal(0)
            expect(list.indexOf(456)).to.equal(1)
            expect(list.indexOf(789)).to.equal(2)

        });
    })

    describe('insertAt', () => {
        it('should insert data by index', () => {
            const list = new LinkedList()
            const data = 9001
            const position = 1

            list.add(32)
            list.add(47)

            list.insertAt(position, data)

            expect(list.indexOf(data)).to.equal(position)
        });
    });

    describe('removeAt', () => {
        it('should delete element by index', () => {
            const list = new LinkedList();

            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            list.add(5)

            list.removeAt(2)

            expect(list.indexOf(2)).to.equal(4)
        });
    });

