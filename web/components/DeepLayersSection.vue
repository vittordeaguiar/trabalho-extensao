<template>
  <section>
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center">
        <!-- Middle Layers -->
        <div class="hidden-el">
          <h3 class="highlight">Camadas Intermediárias</h3>
          <h2 style="font-size: 2rem; margin-bottom: 20px">Montando o Puzzle</h2>
          <p>Depois de achar as linhas, a rede começa a conectá-las.</p>
          <ul style="list-style: none; margin-top: 20px">
            <li style="margin-bottom: 10px">
              <i class="ph ph-check" style="color: var(--primary)"></i> Linha vertical + Linha
              horizontal = Canto
            </li>
            <li style="margin-bottom: 10px">
              <i class="ph ph-check" style="color: var(--primary)"></i> Linhas curvas fecham em
              círculos
            </li>
          </ul>
          <div class="shape-example" style="margin-top: 30px">
            <div class="shape-circle"></div>
            <div class="shape-square"></div>
          </div>
        </div>

        <!-- Deep Layers -->
        <div class="hidden-el">
          <h3 class="highlight" style="color: var(--accent)">Camadas Profundas</h3>
          <h2 style="font-size: 2rem; margin-bottom: 20px">O Objeto Completo</h2>
          <p>No final da rede, formas simples se juntam para criar conceitos complexos.</p>
          <div
            style="
              background: var(--bg-card);
              padding: 20px;
              border-radius: 12px;
              margin-top: 20px;
            "
          >
            <p style="font-family: monospace; color: var(--accent)">
              SE (tem rodas) E (tem janelas) E (tem metal)<br />
              ENTÃO = PROVAVELMENTE É UM CARRO (98%)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
