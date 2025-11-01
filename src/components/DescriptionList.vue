<template>
  <div>
    <h3 class="text-lg font-semibold mb-4">Conteúdo</h3>
    <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-if="scopeAndContent">
        <dt class="font-semibold text-gray-700">Âmbito e conteúdo</dt>
        <dd>{{ scopeAndContent }}</dd>
      </div>
      <div v-if="extentAndMedium">
        <dt class="font-semibold text-gray-700">Dimensão e suporte</dt>
        <dd>{{ extentAndMedium }}</dd>
      </div>
    </dl>
    <h3 class="text-lg font-semibold mt-4 mb-4">Detalhes</h3>
    <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-if="parentTitle">
        <dt class="font-semibold text-gray-700">Nível superior</dt>
        <dd><a href="#" class="text-blue-600 hover:underline">{{ parentTitle }}</a></dd>
      </div>
      <div v-if="levelOfDescription">
        <dt class="font-semibold text-gray-700">Nível de descrição</dt>
        <dd>{{ levelOfDescription }}</dd>
      </div>
      <div v-if="referenceCode">
        <dt class="font-semibold text-gray-700">Código de referência</dt>
        <dd class="text-sm">{{ referenceCode }}</dd>
      </div>
      <div v-if="publicationStatus">
        <dt class="font-semibold text-gray-700">Estado da publicação</dt>
        <dd>{{ publicationStatus }}</dd>
      </div>
      
      
      <div v-if="dates">
        <dt class="font-semibold text-gray-700">Data(s)</dt>
        <dd>
          <ul>
            <li v-for="(date, index) in dates" :key="index">
              {{ date.date }} ({{ date.type }})
            </li>
          </ul>
        </dd>
      </div>
      <div v-if="repository">
        <dt class="font-semibold text-gray-700">Entidade custodiadora</dt>
        <dd>{{ repository }}</dd>
      </div>
      
      <div v-if="conditionsGoverningAccess">
        <dt class="font-semibold text-gray-700">Condições de acesso</dt>
        <dd>{{ conditionsGoverningAccess }}</dd>
      </div>
      <div v-if="existenceAndLocationOfOriginals">
        <dt class="font-semibold text-gray-700">Existência e localização dos originais</dt>
        <dd>{{ existenceAndLocationOfOriginals }}</dd>
      </div>
      <div v-if="notes">
        <dt class="font-semibold text-gray-700">Notas</dt>
        <dd>
          <ul>
            <li v-for="(note, index) in notes" :key="index">
              {{ note }}
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'DescriptionList',
  props: {
    parentTitle: String,
    referenceCode: String,
    publicationStatus: String,
    levelOfDescription: String,
    extentAndMedium: String,
    dates: Array,
    repository: String,
    scopeAndContent: String,
    conditionsGoverningAccess: String,
    existenceAndLocationOfOriginals: String,
    notes: Array,
  },
};
</script>
