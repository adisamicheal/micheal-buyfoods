import { shallowMount } from '@vue/test-utils'
import Accordion from '@/components/Accordion.vue'


test('Hello', () => {
    // render the component
    const wrapper = shallowMount(Accordion)
    expect(wrapper.find('.show').exists()).toBe(false)

})
