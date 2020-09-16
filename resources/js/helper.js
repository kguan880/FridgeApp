export function mapFields(obj) {
    const object = {};
    for (let x = 0; x < obj.fields.length; x++) {
      const field = [obj.fields[x]];
      object[field] = {
        get() {
          return this.$store.state[obj.base][field];
        },
        set(value) {
          this.$store.commit(obj.mutation, { [field]: value });
        }
      };
    }
    return object;
  }