<template>
  <v-container grid-list-md index-of-things>
    <v-layout v-for="(item, idx) in items" :key="idx" align-center index-row item-index-row
              row wrap>
      <v-flex sm6 xs12>
        <div>

        </div>
      </v-flex>
      <v-flex sm6 wrap-btn xs12>
        <v-btn :to="{ name: 'item-edit', params: { item_id: item.id }}"
               class="btn-edit"
               color="blue"
               tag="section">
          Edit
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Note that we have two items by default.
      items: [
        {id: 1, name: 'Foo'},
        {id: 2, name: 'Bar'}
      ]
    };
  }
};
</script>
