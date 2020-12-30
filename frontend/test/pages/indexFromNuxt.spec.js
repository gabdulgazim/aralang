import Vuetify from 'vuetify'

// Components
import indexFromNuxt from '@/pages/indexFromNuxt'

// Utilities
import {createLocalVue, RouterLinkStub, shallowMount} from '@vue/test-utils'

describe('indexFromNuxt.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = shallowMount(indexFromNuxt, {
      localVue,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find(' .intro')

    expect(title.text()).toBe('Изучай арабский на своём уровне')
  })
})
