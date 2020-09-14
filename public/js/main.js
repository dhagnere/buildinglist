$(document).ready(() => {
  $('.delete-category').on('click', (e) => {
      $target = $(e.target);
      const id = $target.attr('data-cat-id');
      $.ajax({
          type:'DELETE',
          url: '/categories/delete/' + id,
          success: (response) => {
              alert('Note éffacée de la Base de données...');
              window.location.href = '/';
          },
          error: (error) => {
              console.log(error);
          }
      });
  });
});