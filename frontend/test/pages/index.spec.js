import Vuetify from 'vuetify'

// Components
import index from '@/pages/index'

// Utilities
import {createLocalVue, RouterLinkStub, shallowMount} from '@vue/test-utils'

describe('index.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = shallowMount(index, {
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
    const title = wrapper.find('.headline')

    expect(title.text()).toBe('AraLang')
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = shallowMount(index, {
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
    const title = wrapper.find('.headline')

    expect(title.text()).toBe('AraLang')
  })
})
