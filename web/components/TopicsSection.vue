<template>
  <section style="background: var(--bg-card)">
    <div class="container">
      <h2 class="hidden-el" style="text-align: center; margin-bottom: 40px">
        O que vamos descobrir?
      </h2>
      <div class="topics-grid">
        <div class="topic-card hidden-el">
          <i class="ph ph-squares-four topic-icon"></i>
          <h3>A Matriz</h3>
          <p>Como imagens são apenas números.</p>
        </div>
        <div class="topic-card hidden-el" style="transition-delay: 100ms">
          <i class="ph ph-corners-out topic-icon"></i>
          <h3>Bordas</h3>
          <p>Detectando contornos iniciais.</p>
        </div>
        <div class="topic-card hidden-el" style="transition-delay: 200ms">
          <i class="ph ph-puzzle-piece topic-icon"></i>
          <h3>Formas</h3>
          <p>Montando o quebra-cabeça.</p>
        </div>
        <div class="topic-card hidden-el" style="transition-delay: 300ms">
          <i class="ph ph-robot topic-icon"></i>
          <h3>Reconhecimento</h3>
          <p>Identificando objetos complexos.</p>
        </div>
      </div>
    </div>
  </section>
</template>
