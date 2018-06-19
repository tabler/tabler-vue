<template>
    <div class="custom-file">
        <input :name="name" class="custom-file-input" type="file" :multiple="multiple" :accept="accept"
               @change="onChange">
        <label class="custom-file-label">
            <slot>{{ label }}</slot>
        </label>
    </div>
</template>

<script>
  import formElementsMixin from '../../mixins/formElement'

  export default {
    name: "form-file-input",
    props: {
      accept: {default: '*', type: String},
      label: {default: 'Choose file', type: String},
      multiple: {default: false, type: Boolean}
    },
    mixins: [formElementsMixin]
  }
</script>

<style scoped>

</style>