import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

export default function Estadisticas() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* ——— Header ——— */}
      <View className="flex-row items-center justify-between bg-gray-200 px-4 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold">Reportes Estadísticas</Text>
        <View className="w-8 h-8 bg-gray-400 rounded-full" />
      </View>

      {/* ——— Search bar ——— */}
      <View className="mx-4 my-3">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TextInput
            placeholder="Filtro de Búsqueda y Fecha"
            editable={false}
            className="flex-1 text-gray-600"
          />
          <Text className="ml-2">🔍</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* ——— Card Mes ——— */}
        <View className="bg-gray-100 m-4 p-4 rounded-xl">
          <Text className="font-bold mb-2">Mes</Text>
          <Text>Número de Visitas:</Text>
          <Text>Clientes Atraídos:</Text>
        </View>

        {/* ——— Gráfico Principal ——— */}
        <View className="bg-gray-100 m-4 p-4 rounded-xl items-center">
          <Text className="text-xl font-bold self-start mb-2">Gráfico Principal</Text>
          {/* placeholder de gráfico */}
          <View className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
            <Text className="text-gray-600">[Gráfico]</Text>
          </View>
        </View>

        {/* ——— Exportar PDF ——— */}
        <TouchableOpacity
          className="bg-gray-100 m-4 p-6 rounded-xl items-center"
          onPress={() => {
            // aquí tu lógica para exportar
          }}
        >
          <Text className="font-bold mb-2">Exportar PDF</Text>
          {/* si tienes un ícono local, reemplaza el source */}
          <Image
            source={{ uri: "https://via.placeholder.com/64x64?text=PDF" }}
            style={{ width: 64, height: 64 }}
          />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}
