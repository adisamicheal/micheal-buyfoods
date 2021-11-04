 import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Bank Verification Number (11-digits)'
    const wrapper = shallowMount(Input, {
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
