<template>
  <section id="camadas" style="background: rgba(255, 255, 255, 0.02)">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 50px" class="hidden-el">
        <h2 style="font-size: 2.5rem; margin-bottom: 15px">1ª Camada: O "Desenhista"</h2>
        <p>
          A rede neural não vê o objeto inteiro de cara. A primeira coisa que ela faz é passar
          <strong>filtros</strong> para encontrar onde as coisas mudam de cor drasticamente. É
          assim que ela acha as bordas.
        </p>
      </div>

      <div class="layer-visual hidden-el">
        <div style="text-align: center">
          <p style="margin-bottom: 10px">Entrada (Pixels)</p>
          <div class="filter-box" style="background: #333">Imagem<br />Original</div>
        </div>

        <i class="ph ph-arrow-right arrow-right"></i>

        <div style="text-align: center">
          <p style="margin-bottom: 10px">Filtro Vertical</p>
          <div class="filter-box filter-vertical"></div>
        </div>

        <div style="text-align: center">
          <p style="margin-bottom: 10px">Filtro Horizontal</p>
          <div class="filter-box filter-horizontal"></div>
        </div>

        <i class="ph ph-arrow-right arrow-right"></i>

        <div style="text-align: center">
          <p style="margin-bottom: 10px">O que a IA vê:</p>
          <div
            class="filter-box"
            style="border-color: var(--secondary); box-shadow: 0 0 20px rgba(6, 182, 212, 0.2)"
          >
            <svg width="80" height="80" viewBox="0 0 100 100">
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                fill="none"
                stroke="white"
                stroke-width="4"
              />
            </svg>
          </div>
          <p style="font-size: 0.8rem; margin-top: 5px; color: var(--secondary)">
            Apenas contornos
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
