<template>
  <div>
    <Navigation />
    <HeroSection />
    <TopicsSection />
    <PixelsSection />
    <LayersSection />
    <DeepLayersSection />
    <ApplicationsSection />
    <SummarySection />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Scroll animations usando IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-el')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.hidden-el').forEach((el) => {
    observer.observe(el)
  })
})
</script>
