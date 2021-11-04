import { shallowMount } from '@vue/test-utils'
import Accordion from '@/components/Accordion.vue'


test('Hello', () => {
    // render the component
    const wrapper = shallowMount(Accordion)
    expect(wrapper.find('.show').exists()).toBe(false)

})
// describe('Input.vue', () => {
//   it('set show to false by default', () => {
//     const label = 'Bank Verification Number (11-digits)'
//     const wrapper = shallowMount(Accordion, {
//       propsData: { label }
//     })
//     // assert the error is rendered
//   expect(wrapper.find('.show').exists()).toBe(false)
//   })
// })
