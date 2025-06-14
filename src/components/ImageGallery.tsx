import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Link, X, Image as ImageIcon, Plus, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { ProjectImage } from '../types';

interface ImageGalleryProps {
  images: ProjectImage[];
  stageId?: string;
  onImageAdded: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, stageId, onImageAdded }) => {
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!stageId) return;
    
    setIsUploading(true);
    setUploadError(null);
    
    for (const file of acceptedFiles) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        // Check if storage bucket exists by trying to upload
        const { error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(fileName, file);

        if (uploadError) {
          if (uploadError.message.includes('Bucket not found')) {
            setUploadError('El bucket de almacenamiento "project-images" no existe. Por favor, créalo en tu panel de Supabase.');
            break;
          }
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('project-images')
          .getPublicUrl(fileName);

        await supabase
          .from('project_images')
          .insert({
            title: file.name,
            description: 'Imagen subida del dispositivo',
            image_url: publicUrl,
            stage_id: stageId
          });

        onImageAdded();
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploadError(`Error al subir ${file.name}: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      }
    }
    
    setIsUploading(false);
  }, [stageId, onImageAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true
  });

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stageId || !imageUrl.trim()) return;

    try {
      setUploadError(null);
      await supabase
        .from('project_images')
        .insert({
          title: imageTitle || 'Imagen desde URL',
          description: imageDescription || 'Imagen agregada desde URL',
          image_url: imageUrl,
          stage_id: stageId
        });

      setImageUrl('');
      setImageTitle('');
      setImageDescription('');
      setIsAddingImage(false);
      onImageAdded();
    } catch (error) {
      console.error('Error adding image from URL:', error);
      setUploadError(`Error al agregar imagen: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta imagen?')) return;
    
    try {
      await supabase
        .from('project_images')
        .delete()
        .eq('id', imageId);
      
      onImageAdded();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Galería de Imágenes
        </h3>
        {stageId && (
          <button
            onClick={() => setIsAddingImage(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Agregar Imagen
          </button>
        )}
      </div>

      {uploadError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-red-800 mb-1">Error de Almacenamiento</h4>
            <p className="text-sm text-red-700">{uploadError}</p>
            {uploadError.includes('Bucket not found') && (
              <div className="mt-2 text-sm text-red-700">
                <p className="font-medium">Para solucionar este problema:</p>
                <ol className="list-decimal list-inside mt-1 space-y-1">
                  <li>Ve a tu panel de Supabase</li>
                  <li>Navega a la sección "Storage"</li>
                  <li>Crea un nuevo bucket llamado "project-images"</li>
                  <li>Configura las políticas de acceso apropiadas</li>
                </ol>
              </div>
            )}
          </div>
          <button
            onClick={() => setUploadError(null)}
            className="text-red-500 hover:text-red-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {isAddingImage && (
        <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Subir desde dispositivo</h4>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-green-400'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              {isUploading ? (
                <p className="text-green-600">Subiendo imágenes...</p>
              ) : isDragActive ? (
                <p className="text-green-600">Suelta las imágenes aquí...</p>
              ) : (
                <div>
                  <p className="text-gray-600 mb-1">
                    Arrastra imágenes aquí o haz clic para seleccionar
                  </p>
                  <p className="text-xs text-gray-500">
                    Formatos soportados: JPEG, PNG, GIF, WebP
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-700 mb-2">Agregar desde URL</h4>
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <input
                type="url"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Título (opcional)"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <textarea
                placeholder="Descripción (opcional)"
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Link className="w-4 h-4" />
                  Agregar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingImage(false);
                    setUploadError(null);
                  }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {images.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <ImageIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>No hay imágenes en la galería</p>
          {stageId && (
            <p className="text-sm mt-1">Agrega imágenes para documentar esta etapa del proyecto</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="opacity-0 group-hover:opacity-100 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all"
                  title="Eliminar imagen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 rounded-b-lg">
                <h4 className="text-white font-medium text-sm">{image.title}</h4>
                {image.description && (
                  <p className="text-gray-200 text-xs mt-1">{image.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;