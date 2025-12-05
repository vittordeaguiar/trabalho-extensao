<template>
  <section id="inicio" class="hero">
    <div ref="bgAnimation" class="hero-visual"></div>
    <div class="container hero-content hidden-el">
      <h1>Como Redes Neurais <br /><span class="gradient-text">Veem Imagens</span></h1>
      <p>
        Uma jornada visual interativa pelo cérebro da Inteligência Artificial. Entenda como
        computadores transformam números em visão.
      </p>
      <div style="margin-top: 30px">
        <i class="ph ph-mouse-simple" style="font-size: 32px; animation: bounce 2s infinite"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const bgAnimation = ref(null)

onMounted(() => {
  // Animação de fundo (partículas simples)
  const bgContainer = bgAnimation.value
  for (let i = 0; i < 15; i++) {
    const node = document.createElement('div')
    node.classList.add('node')

    // Posição aleatória
    const size = Math.random() * 10 + 5
    node.style.width = `${size}px`
    node.style.height = `${size}px`
    node.style.left = `${Math.random() * 100}%`
    node.style.top = `${Math.random() * 100}%`
    node.style.opacity = Math.random() * 0.5

    // Duração aleatória da animação
    node.style.animationDuration = `${Math.random() * 5 + 3}s`

    bgContainer.appendChild(node)
  }
})
</script>
