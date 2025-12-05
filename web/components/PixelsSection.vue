<template>
  <section id="pixels">
    <div class="container">
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 40px">
        <div style="flex: 1; min-width: 300px" class="hidden-el">
          <h2 style="font-size: 2.5rem; margin-bottom: 20px">
            Tudo começa com <span class="highlight">Pixels</span>
          </h2>
          <p style="margin-bottom: 20px; font-size: 1.1rem">
            Para você, uma imagem é uma foto colorida. Para o computador, é uma
            <strong>matriz gigante de números</strong> (como uma planilha do Excel).
          </p>
          <p style="color: var(--text-muted)">
            Cada "quadradinho" (pixel) tem um valor numérico que diz o quão brilhante ou colorido
            ele é. Tente diminuir a resolução ao lado para ver a grade se formar.
          </p>
        </div>

        <div style="flex: 1; min-width: 300px" class="hidden-el">
          <div class="pixel-demo-container">
            <canvas ref="pixelCanvas" width="300" height="300"></canvas>
            <div class="controls">
              <label
                for="resolution"
                style="display: block; margin-bottom: 10px; font-size: 0.9rem"
                >Resolução da Visão do Computador:</label
              >
              <input
                type="range"
                id="resolution"
                min="4"
                max="100"
                v-model="resolution"
                @input="renderPixelated"
              />
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  font-size: 0.8rem;
                  color: var(--text-muted);
                  margin-top: 5px;
                "
              >
                <span>Apenas Números (4x4)</span>
                <span>Imagem Nítida (HD)</span>
              </div>
            </div>
            <p
              style="font-size: 0.9rem; text-align: center; color: var(--secondary)"
            >
              {{ pixelText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const pixelCanvas = ref(null)
const resolution = ref(100)
const pixelText = ref('Alta Resolução: O cérebro humano reconhece facilmente.')

// Função para desenhar a forma base (um coração vermelho)
function drawShape(context, size) {
  context.fillStyle = '#1e293b' // Limpa fundo
  context.fillRect(0, 0, size, size)

  context.fillStyle = '#ec4899' // Cor Rosa/Vermelho
  context.beginPath()
  const topCurveHeight = size * 0.3
  context.moveTo(size * 0.5, size * 0.2)
  context.bezierCurveTo(
    size * 0.5,
    size * 0.1,
    size * 0.1,
    size * 0.1,
    size * 0.1,
    topCurveHeight
  )
  context.bezierCurveTo(
    size * 0.1,
    size * 0.6,
    size * 0.5,
    size * 0.8,
    size * 0.5,
    size * 0.9
  )
  context.bezierCurveTo(
    size * 0.5,
    size * 0.8,
    size * 0.9,
    size * 0.6,
    size * 0.9,
    topCurveHeight
  )
  context.bezierCurveTo(
    size * 0.9,
    size * 0.1,
    size * 0.5,
    size * 0.1,
    size * 0.5,
    size * 0.2
  )
  context.fill()

  // Adiciona um sorriso simples
  context.strokeStyle = '#fff'
  context.lineWidth = size * 0.05
  context.beginPath()
  context.arc(size * 0.5, size * 0.5, size * 0.2, 0.2 * Math.PI, 0.8 * Math.PI)
  context.stroke()
}

function renderPixelated() {
  const canvas = pixelCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height
  const res = parseInt(resolution.value)

  // 1. Criar um canvas temporário pequeno (offscreen)
  const tempCanvas = document.createElement('canvas')
  const tempSize = Math.max(4, Math.floor(w * (res / 100)))
  tempCanvas.width = tempSize
  tempCanvas.height = tempSize
  const tempCtx = tempCanvas.getContext('2d')

  // 2. Desenhar a forma no canvas pequeno
  drawShape(tempCtx, tempSize)

  // 3. Limpar o canvas principal
  ctx.clearRect(0, 0, w, h)

  // 4. Desenhar o canvas pequeno esticado no canvas principal
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(tempCanvas, 0, 0, tempSize, tempSize, 0, 0, w, h)

  // 5. Atualizar Texto
  if (res < 10) {
    pixelText.value = 'Baixa Resolução: O computador vê apenas uma grade de cores médias.'
  } else if (res < 50) {
    pixelText.value = 'Média Resolução: Formas começam a aparecer, bordas serrilhadas.'
  } else {
    pixelText.value = 'Alta Resolução: O cérebro humano reconhece facilmente.'
  }
}

onMounted(() => {
  renderPixelated()
})
</script>
