<script setup>

</script>

<template>
    <Header></Header>
    <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Paciente
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Información Paciente
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Fecha
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Estado
                        </th>
                        <!-- <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Molly Sanders
                                    </p>
                                    <p class="text-gray-600 whitespace-no-wrap">000004</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                            <p class="text-gray-600 whitespace-no-wrap">USD</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                            <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span class="relative">Paid</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Michael Roberts
                                    </p>
                                    <p class="text-gray-600 whitespace-no-wrap">000003</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">$214,000</p>
                            <p class="text-gray-600 whitespace-no-wrap">USD</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                            <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span class="relative">Paid</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Devin Childs
                                    </p>
                                    <p class="text-gray-600 whitespace-no-wrap">000002</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                            <p class="text-gray-600 whitespace-no-wrap">USD</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                            <p class="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                <span class="relative">Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-5 py-5 bg-white text-sm">
                            <div class="flex">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        Frederick Nicholas
                                    </p>
                                    <p class="text-gray-600 whitespace-no-wrap">000001</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">$12,000</p>
                            <p class="text-gray-600 whitespace-no-wrap">USD</p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                            <p class="text-gray-600 whitespace-no-wrap">
                                Due 3 weeks ago
                            </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span class="relative">Overdue</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </section>

    <Footer></Footer>

</template>