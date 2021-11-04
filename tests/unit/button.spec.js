import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

test('triggers a click', async () => {
    const wrapper = mount(Button)

    await wrapper.trigger('click')
})