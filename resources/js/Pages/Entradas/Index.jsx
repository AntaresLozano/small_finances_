import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth, categorias }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        categoria_entrada_id: '',
        valor: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('entradas.store'), { onSuccess: () => reset() });
    };


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Entradas" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit} className='flex flex-col gap-4 '>
                    <label htmlFor="categoria_entrada_id">Income Category</label>
                    <select
                        name="categoria_entrada_id"
                        id="categoria_entrada_id"
                        value={data.categoria_entrada_id}
                        onChange={e => setData('categoria_entrada_id', e.target.value)}
                    >
                        {categorias.map((category, index) => (
                            <option key={index} value={index + 1}>{category.nombre}</option>
                        ))}
                    </select>
                    <InputError message={errors.categoria_entrada_id} className="mt-2" />
                    <input
                        type='number'
                        value={data.valor}
                        placeholder="How much is your income?"
                        className="w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('valor', e.target.value)}
                    />
                    <InputError message={errors.valor} className="mt-2" />
                    <PrimaryButton className=" w-1/2 mt-4 flex justify-center self-center" disabled={processing}>Guardar</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}