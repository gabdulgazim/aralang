import {createLocalVue, mount} from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Foo from '@/components/Foo.vue';

describe('Foo', function () {
  let wrp;

  const routes = [
    {path: '/items/:item_id/edit', name: 'item-edit'}
  ];

  const router = new VueRouter({routes});

  let vuetify

  beforeEach(() => {

    vuetify = new Vuetify()

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(vuetify);

    wrp = mount(Foo, {
      localVue,
      router,
    });
  });


  it('displays N rows when there are N items', () => {
    wrp.setData({
      items: [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
        {id: 4, name: 'Item 4'}
      ]
    });

    // findAll returns an array, and an array has the length property.
    // expect(wrp.findAll('.item-index-row').length).toBe(4);
  });

  it('should render btn as anchor tag with proper edit url', () => {

    // Not using setData() here. Just assume we have some items in
    // the component (our example component does indeed have two
    // default items).  This may or may not be a good approach. It
    // varies from component to component and from project to
    // project. Assess your own situation and decide for yourself.

    let btn = wrp.find('.btn-edit');

    // Each item displayed should have an edit link. Our component
    // uses <v-btn> with the `:to` attribute. That makes it an <a>
    // tag, a link.
    expect(btn.exists()).toBe(true);

    // And it should route to /items/<id>/edit url.
    expect(btn.element.href).toMatch(/items\/\d+\/edit/);
  });

  it('should have a flex', () => {
    // You should see all Vuetify components properly rendered
    // as normal HTML tags. For example, <v-flex> should be
    // rendered as <div class="flex ...">

    let flex = wrp.find('div.flex');

    // Each item displayed should have an edit link. Our component
    // uses <v-btn> with the `:to` attribute. That makes it an <a>
    // tag, a link.
    expect(flex.exists()).toBe(true);

    // Just so that you can visually inspect the rendered html.
    console.log(wrp.find('.item-index-row').html());
  });

});
