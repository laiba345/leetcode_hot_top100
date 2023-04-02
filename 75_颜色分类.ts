/**
 Do not return anything, modify nums in-place instead.
    题目最后给的要求是“进阶”
    - 考察的其实就是快速排序的子过程partition
    - 即：通过一次遍历，把数组分成三个部分
    本质
    - 本质就是三个指针，头指针和中指针负责0和1的交换，中指针和尾指针负责把2移到末尾
*/
function sortColors(nums: number[]): void {
    let len = nums.length
    if(len < 2) return 
    // all in[0, zero] = 0
    // all in[zero, i] = 1
    // all in[two, len-1] = 2
    // 为了保证初始化的时候[0, zero]为空，设置zero = -1
    // 所以下面遍历到0的时候，先加，再交换
    let zero = -1
    // 为了保证初始化的时候(two, len-1)为空，设置two = len - 1
    // 所以下面遍历到2的时候，先交换，再减
    let two = len - 1
    let i = 0
    // 当i==two的时候，还有一个元素没有看
    // 因此循环可以继续的条件是 i <= two
    while(i <= two) {
        if(nums[i] == 0) {
            zero++
            swap(nums, i, zero)
            i++
        }else if(nums[i] == 1) {
            i++
        }else {
            swap(nums, i, two)
            two--
        }
    }
};
function swap(nums: number[], index1: number, index2: number) {
    let temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
}




