<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" >
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        E-Professor
        <div slot="subtitle">Agenda pessoal do professor</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>

        <q-list-header>
          <q-item >
            <img src="statics/no_user.png"  alt="no_user">
            <label>Olá Prof. Israel</label>
          </q-item>
          <hr>
        </q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Perfil" sublabel="Informações gerais e seu perfil" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Contatos" sublabel="Gerencie e organize seus contatos" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Ultimas Notícias" sublabel="interaga com os alunos e fique por dentro de tudo" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')" class="fixed-bottom">
          <q-item-side icon="exit_to_app" />
          <q-item-main label="Sair" sublabel="Efeture logout do app" />
        </q-item>
      </q-list>
    </div>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  data: () => ({})
}
</script>

<style lang="stylus">
img
  text-aligner center
label
  margin 0 auto
</style>
