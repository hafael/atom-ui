<template>
  <form @submit.prevent="submitForm">

    <!-- Identificação -->
    <fieldset class="mb-6">
      <legend class="text-lg font-semibold mb-4">Identificação e conteúdo</legend>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-1">
          <Label for="title">Título</Label>
          <p class="text-sm">Dê um título curto e descritivo para esta memória.</p>
          <Input id="title" name="title" v-model="formData.title" />
        </div>
        <div class="flex flex-col space-y-1">
          <Label for="format">Data</Label>
          <p class="text-sm">Insira a data ou o período em que a memória foi criada. Use os campos de início e fim para datas pesquisáveis.</p>
          <div class="flex gap-2">
            <div>
              <Label for="format">Tipo</Label>
              <Select id="format" name="format" v-model="formData.dateType" :options="dateTypeOptions" />
            </div>
            <div>
              <div v-if="formData.dateType === 1">
                <Label for="format">Data</Label>
                <DatePicker id="date_value" name="date_value" v-model="formData.dateValue"  />
              </div>
              <div class="flex space-x-2" v-else>
                <div>
                  <Label for="format">Início</Label>
                  <DatePicker id="date_value_start" name="date_value_start" v-model="formData.dateValueStart" />
                </div>
                <div>
                  <Label for="format">Final</Label>
                  <DatePicker id="date_value_end" name="date_value_end" v-model="formData.dateValueEnd" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-1">
          <Label for="description">Conteúdo</Label>
          <p class="text-sm">Descreva o que esta memória contém. Que informações ela traz? Quem são as pessoas envolvidas? Onde e quando ela foi criada?</p>
          <Textarea id="description" name="description" :rows="5" v-model="formData.description" />
        </div>
        
        
        <div class="flex flex-col space-y-1">
          <Label for="identifier">Código de referência</Label>
          <p class="text-sm">Se houver, insira um código ou número único para identificar esta memória.</p>
          <Input id="identifier" name="identifier" v-model="formData.identifier" />
        </div>
        <div class="flex flex-col space-y-1">
          <Label for="format">Formato</Label>
          <p class="text-sm">Descreva o formato desta memória. Por exemplo: 1 fotografia em papel, 1 vídeo digital (15 minutos), 10 páginas de um diário.</p>
          <Textarea id="format" name="format" :rows="5" v-model="formData.format" />
        </div>
      </div>
      
    </fieldset>

    <!-- Acesso e Uso -->
    <fieldset class="mb-6">
      <legend class="text-lg font-semibold mb-4">Acesso e Uso</legend>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-1">
          <Label for="rights">Como acessar?</Label>
          <p class="text-sm">Existem restrições para acessar ou usar esta memória? Por exemplo, ela só pode ser vista com autorização, ou não pode ser usada para fins comerciais?</p>
          <Textarea id="rights" name="rights" :rows="5" v-model="formData.rights" />
        </div>
        <div class="flex flex-col space-y-1">
          <Label for="source">Fonte</Label>
          <p class="text-sm">De onde veio esta memória? Foi uma doação, uma compra, ou você mesmo a criou? Se souber, informe a data e como ela foi obtida.</p>
          <Textarea id="source" name="source" :rows="5" v-model="formData.source" />
        </div>
        <div class="flex flex-col space-y-1">
          <Label for="notes_0_125">Outras informações</Label>
          <p class="text-sm">Se houver qualquer outra informação importante sobre esta memória que não se encaixe nos outros campos, descreva aqui.</p>
          <Textarea id="notes_0_125" name="notes_0_125" :rows="5" v-model="formData.notes[0].content" />
        </div>
      </div>
    </fieldset>

    <!-- Publicação -->
    <fieldset class="mb-6">
      <legend class="text-lg font-semibold mb-4">Publicação</legend>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-1">
          <Label for="status">Condição de publicação</Label>
          <p class="text-sm">Marque esta opção para que a memória seja visível para todos os usuários.</p>
          <Select id="status" name="status"  v-model="formData.status" :options="statusOptions" />
        </div>
      </div>
    </fieldset>
    
  </form>
</template>

<script>
import Input from './Input.vue'
import DatePicker from './DatePicker.vue'
import Button from './Button.vue'
import Select from './Select.vue'
import Textarea from './Textarea.vue'
import Label from './Label.vue'

export default {
  components: {
    Input,
    Textarea,
    DatePicker,
    Button,
    Select,
    Label
  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    dateTypeOptions() {
      return [
        { value: 1, text: 'Um dia' },
        { value: 2, text: 'Um período' }
      ];
    },
    statusOptions() {
      return [
        { value: false, text: 'Não publicado' },
        { value: true, text: 'Publicado' }
      ];
    },
  },
}
</script>
