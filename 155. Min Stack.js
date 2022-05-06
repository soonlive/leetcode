/**
 * Created by Xin on 2022/5/6.
 */


var MinStack = function() {
  this.stack = [];
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack[this.length] = val;
  ++this.length;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.splice(this.length-1, 1);
  --this.length;

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.stack[0];
  for(let i =1;i<this.length;++i){
    min = Math.min(min, this.stack[i]);
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
