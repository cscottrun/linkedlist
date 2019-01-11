const Node = require('./node');

    // add()  
    // get() 
    // indexOf()  
    // insertAt()
    // removeAt()
class LinkedList { 
    constructor() 
    { 
        this.length = 0;
        this.head = null;
        this.tail = null;
    };
    
    add (data) {
    	let node = new Node(data)
    	if (!this.head) {
    		this.head = node
    	} else {
    		let curr = this.head
    		let prev;
    		while (curr.next) {
    			prev = curr;
    			curr = curr.next
    		}
    		node.prev = curr;
    		curr.next = node;
    	}
    	this.tail = node;
    	this.length++;
    };

    indexOf(data) {
        let i = 0;
        let curr = this.head;
        while (curr.next && curr.data !== data) {
            curr = curr.next
            i++
        }
        return curr.data === data ? i : false;
    };

    findNodeAt(index) {
    	if (index > this.length) {
    		return false
    	} else {
    		let curr = this.head;
    		let prev;
    		let i = 0;
    		while ( i < index) {
    			prev = curr;
    			curr = curr.next
    			i++
    		}
    		return curr;
    	}
    };
    
    insertAt(index, data) {
    	let curr = this.findNodeAt(index)
    	if (curr) {
    		let node = new Node (data)
    		node.prev = curr.prev;
    		node.next = curr;
    		curr.prev.next = node;
    		curr.prev = node;
    		this.length++
    	}
    };

    removeAt(index) {
        let curr = this.findNodeAt(index);
        if (curr) {
        	if (curr.prev === null) {
        		this.head = curr.next
        	} else {
        		curr.prev.next = curr.next	
        	}
            this.length--
        }
    };
    
  

}; // end of class

module.exports = LinkedList